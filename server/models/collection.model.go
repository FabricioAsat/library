package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Collection struct {
	ID        primitive.ObjectID `bson:"_id"`
	Name      string             `bson:"name"`
	Language  string             `bson:"language"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
}
