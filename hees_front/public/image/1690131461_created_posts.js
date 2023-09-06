migrate((db) => {
  const collection = new Collection({
    "id": "tln9f32f1xdkfda",
    "created": "2023-07-23 16:57:41.706Z",
    "updated": "2023-07-23 16:57:41.706Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v1yhkufy",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tln9f32f1xdkfda");

  return dao.deleteCollection(collection);
})
