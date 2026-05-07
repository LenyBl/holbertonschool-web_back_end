export default function loadBalancer(chinaDownload, USDownload) {
	  return Promise.race([chinaDownload, USDownload])
	    .then((result) => {
	      console.log(result);
	    })
	    .catch((error) => {
	      console.error(error);
	    });
}
