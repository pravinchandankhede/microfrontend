namespace WebService.Services.Controllers;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class StaffController : ControllerBase
{
	[HttpGet(Name = "GetStaff")]
	public async Task<IActionResult> GetAsync()
	{
		var content = await System.IO.File.ReadAllTextAsync("Data/staff.json");

		return Ok(content);
	}
}
