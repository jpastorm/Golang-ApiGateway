package auth

import (
	"api/pkg/cache"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo/v4"
)

//var ctx = context.Background()
type ulogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

//ESTRUCTURA DE LOGIN
//ESTRUCTURA DE SERVICIO
//IGUALANDO LA INTERFAZ DE SERVICIO A LA ESTRUCTURA
var (
	log ulogin
	ser service
	s   iservice = ser
)

func login(c echo.Context) error {

	if err := c.Bind(&log); err != nil {
		return c.JSON(500, &log)
	}

	t, err := s.loginService(log)
	// Throws unauthorized error
	if err != nil {
		return echo.ErrUnauthorized
	}

	return c.JSON(http.StatusOK, map[string]string{
		"token": t,
	})
}
func accessible(c echo.Context) error {
	return c.String(http.StatusOK, "Accessible")
}

func restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["name"].(string)
	return c.String(http.StatusOK, "Welcome "+name+"!")
}

func register(c echo.Context) error {
	rdb := cache.Connect()
	var u user
	var userInterface map[string]interface{}
	if err := c.Bind(&u); err != nil {
		return c.JSON(500, &u)
	}
	ui, _ := json.Marshal(u)
	json.Unmarshal(ui, &userInterface)

	err := rdb.HMSet(u.Nickname, userInterface).Err()
	if err != nil {
		panic(err)
	}
	fmt.Printf("el tipo es %T", &u)
	return c.JSON(http.StatusCreated, &u)
}
