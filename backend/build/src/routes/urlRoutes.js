import express from 'express';
const router = express.Router();
router.post("/url", (req, res) => {
    console.log(req, res);
});
router.get("/url/:userId-:projectId-:hash", (req, res) => {
    console.log(req, res);
});
export default router;
//# sourceMappingURL=urlRoutes.js.map