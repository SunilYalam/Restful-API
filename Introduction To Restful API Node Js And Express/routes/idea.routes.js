
const ideaController = require("../controllers/idea.controller");

/**
 * Define route for the calls like
 * 
 * Get 127.0.01.7070/ideaApp/v1/ideas
 */

module.exports = (app) =>{
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);

    // Post call
    app.post("/ideaApp/v1/ideas", ideaController.createIdea);

    // Put call
    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

    // delete call
    app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);

}