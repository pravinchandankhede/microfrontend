namespace WebService.Services.Controllers;

using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class TeamsController : ControllerBase
{

    [HttpGet(Name = "GetTeams")]
    public async Task<IActionResult> GetAsync()
    {
        var content = await System.IO.File.ReadAllTextAsync("Data/team.json");

        return Ok(content);
    }
}
