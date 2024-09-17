package models

import "encoding/json"

type ItemType string

const (
	BookType      ItemType = "book"
	VideogameType ItemType = "videogame"
	MusicType     ItemType = "music"
	MovieType     ItemType = "movie"
	BoardGameType ItemType = "boardgame"
)

type ItemReq struct {
	Type ItemType        `json:"type" validate:"required"`
	Data json.RawMessage `json:"data"` // This will hold the data based on the type
}
