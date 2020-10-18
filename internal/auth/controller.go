package auth

import (
	"api/pkg/cache"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/go-redis/redis"
	"github.com/labstack/echo/v4"
)

//var ctx = context.Background()
type Ulogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func login(c echo.Context) error {
	rdb := cache.Connect()
	var log Ulogin

	if err := c.Bind(&log); err != nil {
		return c.JSON(500, &log)
	}

	fmt.Printf("Esta es el username %s y este la password %s \n", log.Username, log.Password)
	val, err := rdb.HGet(log.Username, "password").Result()
	if err == redis.Nil {
		fmt.Printf("%s doesnt exists", log.Username)
	} else if err != nil {
		panic(err)
	} else {
		fmt.Println("password", val)
	}

	//Throws unauthorized error
	if log.Password != val {
		return echo.ErrUnauthorized
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
		return err
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
