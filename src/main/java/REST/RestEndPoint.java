package REST;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/msg")
public class RestEndPoint {
    @GET
    public String getTest(){
        return "Hello World, you have gotten to the RESTful part of the aplication\n" +
                "Our very own sleeping dragon so to say.";
    }
}
