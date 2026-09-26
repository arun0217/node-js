Node.js uses an event-driven, non-blocking architecture to handle many client requests without creating a separate JavaScript thread for each one.
JavaScript runs on a single main thread, coordinated by the event loop.
When I/O is waiting, Node.js can keep processing other events instead of blocking on that operation.
When I/O completes, its callback is queued for the event loop; CPU-heavy JavaScript can still block the main thread.
