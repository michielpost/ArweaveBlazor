using Microsoft.AspNetCore.Components;

namespace ArweaveBlazor.SampleApp.Pages
{
    public partial class Index
    {
        [Inject]
        public ArweaveService ArweaveService { get; set; } = default!;

        public bool HasArConnectExtension { get; set; }


        protected override async Task OnInitializedAsync()
        {
            HasArConnectExtension = await ArweaveService.HasArConnectAsync();

        }

        public async Task Connect()
        {
            await ArweaveService.ConnectAsync(new string[] { "ACCESS_ADDRESS" }, "Sample App");

        }

        public async Task Disconnect()
        {
            await ArweaveService.DisconnectAsync();

        }

        public async Task GetBalance()
        {
            var result = await ArweaveService.GetWalletBalanceAsync("1seRanklLU_1VTGkEk7P0xAwMJfA7owA1JHW5KyZKlY");
           
        }

        public async Task GetActiveAddress()
        {
            var result = await ArweaveService.GetActiveAddress();

        }

    }
}
