const role = "admin";

switch (role) {
    case "admin":
        console.log("Full access");
        break;

    case "editor":
        console.log("Edit access");
        break;

    case "user":
        console.log("Normal access");
        break;

    default:
        console.log("Unknown role");
}