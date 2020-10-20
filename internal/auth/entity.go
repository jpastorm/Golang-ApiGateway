package auth

type user struct {
	Nickname string `json:"nickname,omitempty"`
	Username string `json:"username,omitempty"`
	Password string `json:"password,omitempty"`
}
