package auth

import (
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type iservice interface {
	loginService(log ulogin) (string, error)
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
