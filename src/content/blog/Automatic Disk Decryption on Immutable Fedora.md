---
title: "LVM but automatic"
description: "How to automatically decrypt an encryped disk when booting on Immutable Fedora"
pubDate: "April 3 2024"
heroImage: "../images/lvmdrawing.png"
---

>[!error] Verify all this yourself, I'm a novice.
>
>At the very least, following these steps will make you make you susceptible to [cold boot attacks](https://wiki.archlinux.org/title/Trusted_Platform_Module#Data-at-rest_encryption_with_LUKS). I can't be 100% sure these commands don't increase your attack surface further in ways I don't understand.

<br>

# The commands to run.

Most of this is derived from a [guide](https://community.frame.work/t/guide-setup-tpm2-autodecrypt/39005) on the framework Outlet. It was not meant for Immutable fedora, and so i've made my own.


This will add "tpm2-tss" to [dracut](https://wiki.archlinux.org/title/Dracut), this is required for automatic decryption with `systemd-cryptenroll`

```bash
sudo echo "add_dracutmodules+=\" tpm2-tss \"" | sudo tee /etc/dracut.conf.d/tpm2.conf
add_dracutmodules+=" tpm2-tss "
```
>Adds tpm2-tss to the dracut configuration directory at `/etc/dracut.conf.d`

Now that we've added that to the configuraiton, we're ready to add it with crypt-enroll.
```bash
sudo systemd-cryptenroll --wipe-slot tpm2 --tpm2-device auto --tpm2-pcrs "1+3+5+7+11+12+14+15" /dev/nvme0n1p3
```
***
now all that is stolen directly from [here](https://fedoramagazine.org/use-systemd-cryptenroll-with-fido-u2f-or-tpm2-to-decrypt-your-disk/), the only part thats different on atomic fedora is the initramfs re-generation. You must enable it with rpm-ostree.

```bash
rpm-ostree initramfs --enable
```

This will cause rpm-ostree to rebuild your initramfs everytime you do an update or whatever.

to force a rebuild without doing an update, do this;
```
rpm-ostree initramfs-etc --force-sync
```


<br>

>[!cite] References
>
>[Framework TPM2 Autodecrypt guide](https://community.frame.work/t/guide-setup-tpm2-autodecrypt/39005)
>[Fedora Magazine Cryptenroll](https://fedoramagazine.org/use-systemd-cryptenroll-with-fido-u2f-or-tpm2-to-decrypt-your-disk/)
>[Arch Wiki](https://wiki.archlinux.org/title/Trusted_Platform_Module)
