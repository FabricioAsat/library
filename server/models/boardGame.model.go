package models

type BoardGameModel struct {
	BaseModel     `bson:",inline"`
	Designer      string `bson:"designer"`
	Artist        string `bson:"artist"`
	PlayTime      int    `bson:"duration"`              // 120mun
	Age           int    `bson:"age"`                   // +12
	NumberPlayers int    `bson:"number_players"`        // 1-4
	EAN           string `bson:"ean" validate:"max=13"` // only numbers
	UPC           string `bson:"upc" validate:"max=12"` // only numbers
}
