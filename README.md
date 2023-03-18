# Supplier Module
### Submitted as the final exam for Assumption University's CS course: "CSX 4107 Web Application Development"
----
Author: Ornwara S. 6215112

    The Supplier module contained in this repository is a continuation of the [stock-app-next](https://github.com/pandaLabOS/stock-app-next) project. It contains the necessary CRUD operations for the Supplier entity.

*This project shares the same MongoDB cluster as the stock-app-next project for simpler integration.*

---

### Tech Stack
1. [NextJS (v.13.2.4)](https://nextjs.org/blog/next-13)
2. [React (v.18.2.0)](https://react.dev/blog/2022/03/29/react-v18)
3. [Bootstrap (v.5.2.3)](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
4. [SASS (v.1.59.3)](https://sass-lang.com/install)
5. [react-bootstrap (v.2.7.2)](https://www.npmjs.com/package/react-bootstrap)
6. [react-dom (v.18.2.0)](https://www.npmjs.com/package/react-dom)
7. [react-hook-form (v.7.43.7)](https://react-hook-form.com/)
8. [Mongoose (v.7.0.2)](https://mongoosejs.com/)

---

### Application Functionality      
     

**View all Supplier records**
![Supplier Management Dashboard](/public/images/1_index.png)     
**Update existing Supplier records**     
This is accessible from the table at /supplier
![Supplier Management Dashboard](/public/images/2_update.png)     
**Add a new Supplier record**
This function can be accessed by clicking on the ![Add button](/public/images/5_addButton.png) button in the navigation bar.
![Supplier Management Dashboard](/public/images/3_add.png)     
**Delete an existing Supplier record**
You can delete a record by pressing on the [Delete] button in the table.
![Supplier Management Dashboard](/public/images/4_delete.png)

----
### Integration to stock-app-next

To integrate the module to the existing stock-app-next project, follow the instructions listed below:
1. First, install SASS support in stock-app-next using "npm i sass".
2. Move the supplier directories in /api and /pages to the corresponding directories in stock-app-next.
3. An addition to the project is the "HK Grotesk" font. Copy and nest the /fonts directory in the /public directory in stock-app-next.
4. Migrate the required files in /styles and /components directories. These include: 
* /components/Navbar.js
* /components/NavbarCompressed.js
* /styles/Button.module.css
* /styles/Navbar.module.css
* /styles/globals.css (merge the changes)
5. Lastly, modify the "_app.js" file to include the navigation bar.