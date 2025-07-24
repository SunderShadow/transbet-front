import {defineStore} from "pinia"
import {ref} from "vue"

export type Lot = {
    id: number,
    name: string,
    pictures: Array<string>,
    current_bid: number,
    description: string,
}

export const useAuctionStore = defineStore("auctionStore", () => {
    const lots = ref<Array<Lot>>([
        {
            id: 1,
            name: "some name",
            current_bid: 5000,
            pictures: [
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ezbTt21LyLKWJ0aeOOH-gAHaE8%3Fpid%3DApi&f=1&ipt=88983a3051523249a809995f14699b7ea364af106b728ddbd524bf734a2991db",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fpod_public%2F1300%2F176804.jpg&f=1&nofb=1&ipt=affa1b1807c13a7b1507a0eee4fe8287b80d1c8fd20a29a681bf84d68f515661"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta eum, explicabo id laborum nemo omnis quaerat similique sunt unde? Adipisci, consequatur in incidunt labore magnam molestias nam officia repellat sint voluptate? At commodi culpa dicta dolor exercitationem facilis ipsum laboriosam minima, minus mollitia, nisi officiis ratione repellat sunt veritatis!"
        }
    ])

    return {
        lots
    }
})