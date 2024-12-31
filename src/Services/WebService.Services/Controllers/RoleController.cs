namespace WebService.Services.Controllers;

using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class RoleController : ControllerBase
{
	[HttpGet(Name = "GetRole")]
	public async Task<IActionResult> GetAsync()
	{
		var content = await System.IO.File.ReadAllTextAsync("Data/role.json");

		return Ok(content);
	}
}
