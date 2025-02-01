/**
 * Contains the miscellaneous route handlers.
 * @author Njike Njiah Abednego <https://github.com/haylo237>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;