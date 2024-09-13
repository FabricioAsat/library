package models

type BookModel struct {
	BaseModel `bson:",inline"`
	Author    string `bson:"author" validate:"required"`
	ISBN13    string `bson:"isbn13" validate:"max=13"`
	ISBN10    string `bson:"isbn10" validate:"max=12"`
	Pages     int    `bson:"pages" validate:"required"`
}
