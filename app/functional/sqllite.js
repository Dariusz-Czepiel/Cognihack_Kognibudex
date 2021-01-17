//import Sqlite from 'nativescript-sqlite'
const Sqlite = require( "nativescript-sqlite" );

let db;

const TryInitDatabase = async () => {
    // if(Sqlite.exists("OurDatabase.sqlite"))
    //     return;

    db = await Sqlite("OurDatabase", (err, db) => {
        if (err) throw { err, db };
    });
}

export const UpdateUserProfile = async (attribute, value ) => {
    await TryInitDatabase();

    let row;
    db.get('select * from userProfile where attribute = ?', attribute, (err, r) => {
        if (err) throw { err, id };
        else row = r;
    });
    if(row)
        await db.execSQL("update userProfile SET value = ? where attribute = ?", [value, attribute], (err, id) => {
            if (err) throw { err, id };
            });
    else
    {
        console.log('then insert');
        await db.execSQL("insert into userProfile(attribute,value) VALUES (?, ?)", [attribute, value], (err, id) => {
            if (err) throw { err, id };
        });
    }
}

export const GetUserData = async (attribute) => {
    await TryInitDatabase();

    
    let row;
    db.get('select * from userProfile where attribute = ?', [attribute], (err, r) => {
        console.log('getData', r, attribute);
        if (err) throw { err, r };
        else row = r;
    });
    return r;
}

export const FirstTimeSetup = async () => {
    await TryInitDatabase();

    db.execSQL(`CREATE TABLE userProfile(
        id INTEGER PRIMARY KEY,
        attribute TEXT,
        value TEXT
      )`, (err, id) => {
          if (err) throw { err, id };
      });
}

//zrobic wrappery dla throw errors?
export const InitSetup = async () => {
    await TryInitDatabase();

    db.execSQL(`CREATE TABLE test(
      id INTEGER PRIMARY KEY,
      value TEXT
    )`, (err, id) => {
        if (err) throw { err, id };
    });

    db.execSQL("insert into test(value) VALUES ('test')", (err, id) => {
        if (err) throw { err, id };
    });

    db.all('select * from test', function(err, rows) {
        if (err) throw { err, rows };
    });
}