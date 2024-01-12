import { Podcast } from "./podcast";
import { data } from "./api";

/* [TODO]
- create a similar Podcast[] every time search is clicked,
- create a datastore which will store the podcast name and id
- find a better solution if possible */

  const podcasts: Podcast[] = data;
  
  export default podcasts;
  