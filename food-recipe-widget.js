const {meals} = await new Request("https://www.themealdb.com/api/json/v1/1/random.php").loadJSON()

const {
  strMeal: title,
  strMealThumb: imgUrl,
  strYoutube: videoUrl,
  strSource: articleUrl
} = meals[0]

const w = new ListWidget()
w.url = videoUrl || articleUrl
w.backgroundColor = new Color("#222222")
w.backgroundImage = await new Request(imgUrl).loadImage()

const t = w.addText(title)
t.textColor = Color.white()
t.font = new Font("Avenir-Heavy", 28)
t.shadowRadius = 3
t.shadowColor = Color.black()
t.centerAlignText()

Script.setWidget(w)
Script.complete()
 
w.presentMedium()
