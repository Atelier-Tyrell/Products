{
  _id: Schema.ObjectId,
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  created_at: String,
  updated_at: String,
  features: [{feature: String, value: String}],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      sale_price: String,
      default: Boolean,
      photos: [
        {sku_id: String, qty: Number, size: String}
      ]
    }
  ],
  related: [{related_id: Number}]
}