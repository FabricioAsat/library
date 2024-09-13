package models

type MusicModel struct {
	BaseModel `bson:",inline"`
	Artist    string `bson:"artist"`
	Studio    string `bson:"studio"`
	Length    int    `bson:"length"`
	Discs     int    `bson:"discs"`
	EAN       string `bson:"ean" validate:"max=13"`
	UPC       string `bson:"upc" validate:"max=12"`
}
