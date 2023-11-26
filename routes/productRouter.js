const productController = require("../controllers/productController");
const reviewController = require("../controllers/reviewController");

// Router
const router = require("express").Router();

///// use routers
router.post("/addProduct", productController.addProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/published", productController.getPublishedProduct);

///// Review URL and Controller

router.post("/addReview", reviewController.addReview);
router.get("/allReviews", reviewController.getAllReviews);

///// Get product reviews
router.get("/getProductReviews", productController.getProductReviews);

///// Products router
router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
