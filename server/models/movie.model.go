package models

type MovieModel struct {
	BaseModel   `bson:",inline"`
	Director    string   `bson:"director"`
	Actors      []string `bson:"actors"`
	EAN         string   `bson:"ean" validate:"max=13"`
	UPC         string   `bson:"upc" validate:"max=12"`
	AspectRatio string   `bson:"aspect_ratio"`
	Duration    int      `bson:"duration"`
	Age         int      `bson:"age"`
}
