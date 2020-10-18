package users

import (
	"github.com/labstack/echo/v4"
)

type Response struct {
	Message string `json:"message"`
}

func Login(c echo.Context) error {
	// res := &Response{
	// 	Message: "Hola desde login",
	// }
	t := map[string]string{"Message": "Hola desde login"}
	return c.JSON(200, t)
}
