package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type BaseModel struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	CollectionID primitive.ObjectID `bson:"collection_id" validate:"required"`
	Title        string             `bson:"title" validate:"required"`
	Description  string             `bson:"description" validate:"required"`
	PublishedAt  time.Time          `bson:"published_at"`
	Image        string             `bson:"image"`
	Tags         []string           `bson:"tags"`
	Group        string             `bson:"group"`
	Notes        string             `bson:"notes"`
	Price        float32            `bson:"price"`
}
