import type {Lot} from "@/stores/auction"

export type ConnectionError = CustomEvent
export type LotCreateEvent = CustomEvent<Lot>

export class Client extends EventTarget {
    #con: WebSocket

    constructor(url: string) {
        super();

        this.#con = new WebSocket(url)
        this.#con.onerror = () => {
            this.dispatchEvent(new CustomEvent("connection.error"))
        }

        this.#con.onmessage = (msg) => {
            let data = JSON.parse(msg.data)

            this.dispatchEvent(new CustomEvent<Lot>(data.event, {
                detail: data.data
            }))
        }
    }
}