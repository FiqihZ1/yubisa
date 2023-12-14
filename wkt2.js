        
        var waktu = new Date();

        var tgl = waktu.getDate();
        var bln = waktu.getMonth();
        var thn = waktu.getFullYear();

        var jam = waktu.getHours();
        var mnt = waktu.getMinutes();
        var dtk = waktu.getSeconds();

        var bulan = ["Januari", "Februari", "Maret", "April", "Mei",
        "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    document.write(tgl + " " + bulan[bln] + " " + thn + " " +  "Pukul" + " " + jam + " : " + mnt + " : " + dtk);