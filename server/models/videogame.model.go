package models

type VideogameModel struct {
	BaseModel `bson:",inline"`
	Platform  string `bson:"platform"`
	Studio    string `bson:"studio"`
	EAN       string `bson:"ean" validate:"max=13"`
	UPC       string `bson:"upc" validate:"max=12"`
	ESRB      string `bson:"esrb"`
}
