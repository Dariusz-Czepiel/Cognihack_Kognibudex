import { Color } from '@nativescript/core'
import { LocalNotifications, ScheduleOptions } from "@nativescript/local-notifications";
//import { alert } from 'svelte'

// function doCheckHasPermission(): void {
//     LocalNotifications.hasPermission()
//         .then(granted => {
//         alert({
//             title: "Permission granted?",
//             message: granted ? "YES" : "NO",
//             okButtonText: "OK"
//         });
//         });
// };
export function doCheckHasPermission() {
    return LocalNotifications.hasPermission();
};

// function doRequestPermission(): void {
//     LocalNotifications.requestPermission()
//         .then(granted => {
//         alert({
//             title: "Permission granted?",
//             message: granted ? "YES" : "NO",
//             okButtonText: "OK"
//         });
//         });
// }

export function doRequestPermission() {
    return LocalNotifications.requestPermission();
}

// function doScheduleEveryMinute(): void {
//     LocalNotifications.schedule(
//         [{
//         id: 6,
//         title: 'Every minute!',
//         interval: 'minute', // some constant
//         body: 'I\'m repeating until cancelled',
//         icon: 'res://ic_stat_smiley',
//         thumbnail: "res://ic_stat_notify",
//         forceShowWhenInForeground: true,
//         at: new Date(new Date().getTime() + 10 * 1000)
//         }])
//         .then(() => {
//         alert({
//             title: "Notification scheduled",
//             message: 'ID: 6, repeating',
//             okButtonText: "OK, thanks"
//         });
//         })
//         .catch(error => console.log("doScheduleEveryMinute error: " + error));
// }

export function doScheduleEveryMinute() {
    return LocalNotifications.schedule(
        [{
            id: 6,
            title: 'Every minute!',
            interval: 'minute', // some constant
            body: 'I\'m repeating until cancelled',
            icon: 'res://ic_stat_smiley',
            thumbnail: "res://ic_stat_notify",
            forceShowWhenInForeground: true,
            at: new Date(new Date().getTime() + 10 * 1000)
        }]);
        // .then(() => {
        // alert({
        //     title: "Notification scheduled",
        //     message: 'ID: 6, repeating',
        //     okButtonText: "OK, thanks"
        // });
        // })
        // .catch(error => console.log("doScheduleEveryMinute error: " + error));
}

// function doScheduleWithButtons(): void {
//     const options: ScheduleOptions[] = [
//   {
//     id: 1,
//     title: 'THE TITLE',
//     subtitle: 'The subtitle',
//     body: 'Jak się dzisiaj czujesz.',
//     bigTextStyle: true, // Allow more than 1 row of the 'body' text
//     sound: "customsound",
//     color: new Color("green"),
//     forceShowWhenInForeground: true,
//     channel: "My Awesome Channel", // not that this is revealed in the notification tray when you longpress it on Android
//     ticker: "Special ticker text (Android only)",
//     at: new Date(new Date().getTime() + (10 * 1000)),
//     notificationLed: true,
//     actions: [
//         // {
//         //     id: "how",
//         //     type: "input",
//         //     title: "how?",
//         //     launch: true,
//         //     choices: ['1','2','3','4','5']
//         // },
//       {
//         id: "yes",
//         type: "button",
//         title: "1",
//         launch: true,
//       },
//       {
//         id: "no",
//         type: "button",
//         title: "2",
//         launch: false
//       },{
//         id: "yes2",
//         type: "button",
//         title: "3",
//         launch: true,
//       },
//       {
//         id: "no2",
//         type: "button",
//         title: "4",
//         launch: false
//       },{
//         id: "yes3",
//         type: "button",
//         title: "5",
//         launch: true,
//       }
//     ]
//   }
// //   ,
// //   {
// //     title: 'Generated ID',
// //     at: new Date(new Date().getTime() + (5 * 1000))
// //   }
// ];
// LocalNotifications.schedule(options)
//     .then((scheduledIds: Array<number>) => {
//       alert({
//         title: "Notification scheduled",
//         message: `ID: ${JSON.stringify(scheduledIds)}`,
//         okButtonText: "OK, thanks"
//       });
//     })
//     .catch(error => console.log("doSchedule error: " + error))
// };

export function doScheduleWithButtons() {
    const options: ScheduleOptions[] = [
    {
        id: 1,
        title: 'THE TITLE',
        subtitle: 'The subtitle',
        body: 'Jak się dzisiaj czujesz.',
        bigTextStyle: true, // Allow more than 1 row of the 'body' text
        sound: "customsound",
        color: new Color("green"),
        forceShowWhenInForeground: true,
        channel: "My Awesome Channel", // not that this is revealed in the notification tray when you longpress it on Android
        ticker: "Special ticker text (Android only)",
        at: new Date(new Date().getTime() + (10 * 1000)),
        notificationLed: true,
        actions: [
            // {
            //     id: "how",
            //     type: "input",
            //     title: "how?",
            //     launch: true,
            //     choices: ['1','2','3','4','5']
            // },
        {
            id: "yes",
            type: "button",
            title: "1",
            launch: true,
        },
        {
            id: "no",
            type: "button",
            title: "2",
            launch: false
        },{
            id: "yes2",
            type: "button",
            title: "3",
            launch: true,
        },
        {
            id: "no2",
            type: "button",
            title: "4",
            launch: false
        },{
            id: "yes3",
            type: "button",
            title: "5",
            launch: true,
        }
        ]
    }
    //   ,
    //   {
    //     title: 'Generated ID',
    //     at: new Date(new Date().getTime() + (5 * 1000))
    //   }
    ];
    return LocalNotifications.schedule(options);
        // .then((scheduledIds: Array<number>) => {
        // alert({
        //     title: "Notification scheduled",
        //     message: `ID: ${JSON.stringify(scheduledIds)}`,
        //     okButtonText: "OK, thanks"
        // });
        // })
        // .catch(error => console.log("doSchedule error: " + error))
};