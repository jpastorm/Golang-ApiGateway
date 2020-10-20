package auth

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type iservice interface {
	loginService(log ulogin) (string, error)
	registerService(u user) map[string]interface{}
}

type service struct {
	repository
}

func (s service) loginService(log ulogin) (string, error) {

	resultPassword := s.findOneAttribute(log.Username, "password")
	if log.Password != resultPassword {
		return "", fmt.Errorf("unAuthorized")
	}
	// Create token
	token := jwt.New(jwt.SigningMethodHS256)
	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = log.Username
	claims["exp"] = time.Now().Add(time.Hour * 3).Unix()
	// Generate encoded token and send it as response.
	t, err := token.SignedString([]byte("secret"))
	if err != nil {
		return "", err
	}
	return t, nil
}

func (s service) registerService(u user) map[string]interface{} {

	var userInterface map[string]interface{}

	ui, _ := json.Marshal(u)
	json.Unmarshal(ui, &userInterface)

	err := s.createOne(u.Nickname, userInterface)
	if err != nil {
		return map[string]interface{}{
			"status": 500,
			"Error":  err,
		}
	}
	return map[string]interface{}{
		"data": &u,
	}
}
