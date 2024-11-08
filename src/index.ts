import { Server, Socket, AttachOptions, ServerOptions } from 'engine.io-v3';

/**
 * `QSocketTransportEIOV3Server` is a class from `engine.io-v3`, used to create a new Engine.IO server instance.
 * It manages incoming connections, allowing real-time, low-latency communication.
 *
 * @type {Server}
 */
export const QSocketTransportEIOV3Server: typeof Server = Server;

/**
 * `QSocketTransportEIOV3Socket` represents an individual socket connection in the Engine.IO server.
 * This class manages the interaction with a specific client, enabling data transfer.
 *
 * @type {Socket}
 */
export const QSocketTransportEIOV3Socket: typeof Socket = Socket;

/**
 * `IQSocketTransportEIOV3Server` is a type alias for the `Server` class from `engine.io-v3`.
 * This type represents the Engine.IO server instance used to manage connections.
 */
export type IQSocketTransportEIOV3Server = Server;

/**
 * `IQSocketTransportEIOV3Socket` is a type alias for the `Socket` class from `engine.io-v3`.
 * This type represents an individual client connection on the server.
 */
export type IQSocketTransportEIOV3Socket = Socket;

/**
 * `IQSocketTransportEIOV3AttachOptions` is a type alias for the `AttachOptions` from `engine.io-v3`.
 * This type is used to specify options when attaching the Engine.IO server to an HTTP server.
 */
export type IQSocketTransportEIOV3AttachOptions = AttachOptions;

/**
 * `IQSocketTransportEIOV3ServerOptions` is a type alias for the `ServerOptions` from `engine.io-v3`.
 * This type represents configuration options for initializing the Engine.IO server instance.
 */
export type IQSocketTransportEIOV3ServerOptions = ServerOptions;
