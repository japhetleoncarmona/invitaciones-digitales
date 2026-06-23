const Event = require('./Event');
const EventTimeline = require('./EventTimeline');
const EventGallery = require('./EventGallery');

Event.hasMany(EventTimeline, {
    foreignKey: 'event_id',
    as: 'timelines'
});

EventTimeline.belongsTo(Event, {
    foreignKey: 'event_id',
    as: 'event'
});

Event.hasMany(EventGallery, {
    foreignKey: 'event_id',
    as: 'gallery'
});

EventGallery.belongsTo(Event, {
    foreignKey: 'event_id',
    as: 'event'
});

module.exports = {
    Event,
    EventTimeline,
    EventGallery
};