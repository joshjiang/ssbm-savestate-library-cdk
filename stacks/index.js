import StorageStack from "./StorageStack";

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
      runtime: "nodejs17.x"
    });
  
  new StorageStack(app, "storage");
}