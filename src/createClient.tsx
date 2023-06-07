import {createClient} from "@sanity/client";

const client = createClient({projectId: '5ouijukq', dataset:'production', apiVersion:'2022-11-11', useCdn:true})

export default client;