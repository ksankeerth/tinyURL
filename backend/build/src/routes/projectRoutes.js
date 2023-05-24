import express from 'express';
const router = express.Router();
router.post("/project", (req, res) => {
    console.log(req, res);
});
router.get("/project/:id", (req, res) => {
    console.log(req, res);
});
router.delete("/project/:id", (req, res) => {
    console.log(req, res);
});
router.put("/project/:id", (req, res) => {
    console.log(req, res);
});
export default router;
//# sourceMappingURL=projectRoutes.js.map