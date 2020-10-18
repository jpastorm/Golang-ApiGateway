package auth

import (
	"api/pkg/cache"
	"fmt"

	"github.com/go-redis/redis"
)

type findOneAttribute func(params ...string) map[string]string

type irepository interface {
	findOneAttribute(params ...string) map[string]string
}
type repository struct {
	findOneRepository findOneAttribute
}

//KEY SE REFIERE A LA LLAVE QUE CONTIENE LA COLECCION, EN ESTE CASO LA COLECCION COMPLETA TIENE
//COMO KEY AL USERNAME Y EL ATRIBUTO QUE QUIERES OBTENER ES LA PASSWORD EN ATTRIBUTE
func (r repository) findOneAttribute(key, attribute string) string {
	rdb := cache.Connect()
	val, err := rdb.HGet(key, attribute).Result()
	if err == redis.Nil {
		fmt.Printf("%s doesnt exists", key)
	} else if err != nil {
		panic(err)
	} else {
		fmt.Println("Value", val)
	}
	return val
}

// func (r repository) findOne(params ...string) map[string]string {
// 	fmt.Println(params)
// 	rdb := cache.Connect()
// 	switch len(params) {
// 	case 0:
// 		val, err := rdb.HGetAll("jpastorm").Result()
// 		if err == redis.Nil {
// 			fmt.Printf("%s doesnt exists", "jpastorm")
// 		} else if err != nil {
// 			panic(err)
// 		} else {
// 			fmt.Println("usuario", val)
// 			return val
// 		}
// 	default:
// 		fmt.Println("Aea")
// 	}
// 	return map[string]string{"Message": "Not found 404"}
// }
