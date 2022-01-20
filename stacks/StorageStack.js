import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  // Public reference to the bucket
  bucket;
  // Public reference to the table
  table;

  constructor(scope, id, props) {
    super(scope, id, props);

    this.bucket = new sst.Bucket(this, "Uploads");

    // Create the DynamoDB table
    this.table = new sst.Table(this, "Savestates", {
      fields: {
        savestateId: sst.TableFieldType.STRING,
        savestateFile: sst.TableFieldType.BINARY,
        note: sst.TableFieldType.STRING,
        user: sst.TableFieldType.STRING
      },
      primaryIndex: { partitionKey: "savestateId", sortKey: "user" },
    });
  }
}