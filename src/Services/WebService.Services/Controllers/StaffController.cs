namespace WebService.Services.Controllers;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebService.Services.Models;

[ApiController]
[Route("api/[controller]")]
public class StaffController : ControllerBase
{
	[HttpGet(Name = "GetStaff")]
	public async Task<IActionResult> GetAsync()
	{
		var content = await System.IO.File.ReadAllTextAsync("Data/staff.json");

		return Ok(content);
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> GetStaffDetailAsync(Int32 id)
	{
		var content = await System.IO.File.ReadAllTextAsync("Data/staff.json");
		var staff = JsonSerializer.Deserialize<List<Staff>>(content);

		var result = staff.FirstOrDefault(x => x.StaffId == id);

		return Ok(result);
	}
}
