
export const getUserName = (ownerID : string,users : any[]) => {
  let username : string | null = null;
  for( let user of users){
    if (user?.id === ownerID){
        username = `${user.first_name} ${user.last_name}` 
        break;
    }
  }
  return username;

}

