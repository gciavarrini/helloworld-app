export interface Config {
    app: {
      /**
       * Frontend root URL
       * @visibility frontend
       */
      baseUrl: string;
  
      // Use @items.<name> to assign annotations to primitive array items
      /** @items.visibility frontend */
      myItems: string[];
    };
  }