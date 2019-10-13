package rest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class RestEndPoint {

    @GET
    public String getTest() {
        return "Hello World";
    }
}
