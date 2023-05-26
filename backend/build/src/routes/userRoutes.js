import express from 'express';
const router = express.Router();
router.post("/user/register", (req, res) => {
    console.log(req, res);
});
router.get("/user/:id", (req, res) => {
    console.log(req, res);
});
router.put("/user/:id", (req, res) => {
    console.log(req, res);
});
router.delete("/user/:id", (req, res) => {
    console.log(req, res);
});
export default router;
//# sourceMappingURL=userRoutes.js.map