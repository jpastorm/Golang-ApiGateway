package auth

import (
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
	if log.Username == "" || log.Password == "" {
		return c.JSON(http.StatusCreated, map[string]interface{}{
			"Message": "Missing values",
		})
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
	var u user
	if err := c.Bind(&u); err != nil {
		return c.JSON(500, &u)
	}
	if u.Nickname == "" || u.Username == "" || u.Password == "" {
		return c.JSON(http.StatusCreated, map[string]interface{}{
			"Message": "Missing values",
		})
	}

	res := s.registerService(u)
	return c.JSON(http.StatusCreated, res)
}
