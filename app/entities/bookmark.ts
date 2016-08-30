/**
 * A class to store Bookamrks.
 * @author Dmitry Noranovich
 */
export class Bookmark {
    /**
     * Bookmark id.
     */
    id: number;
    /**
     * Bookmark URL.
     */
    url: string;
    /**
     * Bookmark description.
     */
    description: string;
    /**
     * A constructor to create bookamrks.
     */
    constructor(id: number, url: string, description: string) {
        this.id = id;
        this.url = url;
        this.description = description;
    }
}