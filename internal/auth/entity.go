package auth

type user struct {
	Nickname string `json:"nickname"`
	Username string `json:"username"`
	Password string `json:"password"`
}
