import express from 'express';
const router = express.Router();
router.post("/auth/login", (req, res) => {
    console.log(req, res);
});
router.post("/auth/logout", (req, res) => {
    console.log(req, res);
});
export default router;
//# sourceMappingURL=authRoutes.js.map