import LandingService from '../services/landing-services.js';
import { existsSync } from 'fs';

class LandingController {
    async createLanding(req, res) {
        try {
            LandingService.createLandingDir();
            res.json({
                message: 'get'
            });
        } catch (e) {
            res.sendStatus(500).json(e);
        }
    }

    async updateLanding(req, res) {
        try {
            res.json({
                message: 'update'
            });
        } catch (e) {
            res.sendStatus(500).json(e);
        }
    }

    async returnLanding(req, res) {
        try {
            if (existsSync(LandingService.zipName)) {
                res.download(LandingService.zipName);
            }

            LandingService.landingToZip()
            .then(() => {
                console.log(LandingService.zipName);
                res.download(LandingService.zipName);
            })
            .catch(e => console.log(e)); 
        } catch (e) {
            res.sendStatus(500).json(e);
        }
    }
    
    async deleteLanding(req, res) {
        LandingService.landingDelete();
        res.json({
            message: 'delete',
        })
    }
};

export default new LandingController();